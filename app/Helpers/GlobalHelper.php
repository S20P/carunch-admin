<?php

use App\Models\Customer;
use App\Models\ItemOptionAttribute;
use App\Models\VehicleType;

    if(!function_exists('get_vehicle_types'))
    {
        function get_vehicle_types()
        {
            $VehicleType=VehicleType::where('status', 1)->get();
            if(is_null($VehicleType))
            {
                return null;
            }
            else
            {
                return  $VehicleType;
            }
        }
    }
    if(!function_exists('getCustomerByEmail'))
    {
        function getCustomerByEmail($email)
        {
            $email=strtolower($email);
            $Customer=Customer::where('email', $email)->first();
            if(!$Customer)
            {
                return null;
            }
            else
            {
                return  $Customer;
            }
        }
    }
?>