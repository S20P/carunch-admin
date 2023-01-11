<?php
namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Dealer;
use App\Models\State;
use App\Models\VehicleType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Login Request
     */
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        $user = Dealer::where("email", request('email'))->first();
        if (!isset($user)) {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "User Not Found...!!",
            ]);
        }
        if (!Hash::check(request('password'), $user->password)) {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Incorrect password...!!",
            ]);
        }
        $tokenResult = $user->createToken('Admin');
        $user->access_token = $tokenResult->accessToken;
        $user->token_type = 'Bearer';

        return response()->json([
            'status' => 1,
            'data' => $user,
            'message' => "User Login Successfully...!!",
        ]);
    }

    public function register(Request $request)
    {
        $request->validate(
            [
                'first_name' => 'required|max:50',
                'last_name' => 'required|max:50',
                'licence' => 'required|max:50',
                'address' => 'required|max:50',
                'state' => 'required|max:50',
                'inventory_location' => 'required',
                'contact_first_name' => 'required|max:50',
                'contact_last_name' => 'required|max:50',
                'mobile' => 'required',
                'email' => 'required|max:160',
                'carfax_api' => 'required',
                'autocheck_api' => 'required',
                'billtrust_account' => 'required',
            ],
        );
        $data = $request->all();

        $result = Dealer::create($data);

        if ($result) {
            return response()->json([
                'status' => 1,
                'data' => [],
                'message' => "Dealer Registered Successfully...!!",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Not Created",
            ]);
        }
    }

    public function profile(Request $request)
    {
        $user_data = Auth::user();
        if ($user_data) {
            return response()->json([
                'status' => 1,
                'data' => $user_data,
                'message' => "Success...!!",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Failed",
            ]);
        }
    }

    public function profile_update(Request $request, Dealer $dealer,$id)
    {
        $request->validate(
            [
                'first_name' => 'required|max:50',
                'last_name' => 'required|max:50',
                'licence' => 'required|max:50',
                'address' => 'required|max:50',
                'state' => 'required|max:50',
                'inventory_location' => 'required',
                'contact_first_name' => 'required|max:50',
                'contact_last_name' => 'required|max:50',
                'mobile' => 'required',
                'email' => 'required|max:160',
                'carfax_api' => 'required',
                'autocheck_api' => 'required',
                'billtrust_account' => 'required',
            ],
        );

        $data = $request->all();
        $dealer = Dealer::find($id);
        $result = $dealer->update($data);

        if ($result) {
            return response()->json([
                'status' => 1,
                'data' => $data,
                'message' => "Dealer Updated Successfully...!!",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => $data,
                'message' => "Not Updated",
            ]);
        }
    }

    public function password_change(Request $request, Dealer $dealer,$id)
    {
        $request->validate(
            [
                'password' => 'required|max:50',
                'old_password' => 'required|max:50',
            ],
        );

        $user = Dealer::where("id", $id)->first();

        if (!isset($user)) {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "User Not Found...!!",
            ]);
        }
        if (!Hash::check(request('old_password'), $user->password)) {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Incorrect password...!!",
            ]);
        }

        $data['password'] = bcrypt($request->password);

        $dealer = Dealer::find($id);
        $result = $dealer->update($data);
        if ($result) {
            return response()->json([
                'status' => 1,
                'data' => [],
                'message' => "Password Updated Successfully...!!",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Not Updated",
            ]);
        }
    }

    public function states(Request $request)
    {
        $result = State::where('status', 1)->get();

        if ($result) {
            return response()->json([
                'status' => 1,
                'data' => $result,
                'message' => "Success...!!",

            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Failed",
            ]);
        }
    }
    public function vehicle_types(Request $request)
    {
        $result = VehicleType::where('status', 1)->get()->makeHidden(['updated_at','created_at','status']);
        if ($result) {
            return response()->json([
                'status' => 1,
                'data' => $result,
                'message' => "Success...!!",

            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Failed",
            ]);
        }
    }
}