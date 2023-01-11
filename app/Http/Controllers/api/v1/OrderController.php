<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function order_request(Request $request)
    {
        $request->validate(
            [
                'first_name' => 'required|max:160',
                'last_name' => 'required|max:160',
                'address' => 'required|max:250',
                'state' => 'required|max:160',
                'zipcode' => 'required|max:10',
                'mobile' => 'required|numeric',
                'email' => 'required|email|max:160',
                'vin_no' => 'required|max:160',
                'vehicle_type_id' => 'required',
                'vehicle_year' => 'required|digits:4|integer|min:1700|max:' . (date('Y') + 2),
                'vehicle_make' => 'required|max:160',
                'vehicle_model' => 'required|max:160',
                'vehicle_mileage' => 'required|integer|max:9223372036854775807',
                'vehicle_wholesale_value' => 'required|numeric|between:0,999999.98',
                'vehicle_retail_value' => 'required|numeric|between:0,999999.98',
            ],
        );
        $data = $request->all();
        $email = $request->email;
        $customer_get = getCustomerByEmail($email);
        if ($customer_get != null) {
            //existing customer
            $customer_id = $customer_get->id;
        } else {
            //create customer
            $customer = Customer::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'address' => $request->address,
                'state' => $request->state,
                'mobile' => $request->mobile,
                'email' => $request->email,
                'zipcode' => $request->zipcode,
            ]);
            if ($customer) {
                $customer_id = $customer->id;
            } else {
                $customer_id = null;
            }
        }

        if ($customer_id != null) {
            $data['customer_id'] = $customer_id;
            $result = Vehicle::create($data);
            if ($result) {
                return response()->json([
                    'status' => 1,
                    'data' => [],
                    'message' => "Order Requested Successfully...!!",
                ]);
            } else {
                return response()->json([
                    'status' => -1,
                    'data' => [],
                    'message' => "Not Created",
                ]);
            }
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Not Created",
            ]);
        }
    }
}
