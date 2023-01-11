<?php

namespace Database\Seeders;

use App\Models\ItemOptionValue;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChangeItemOptionValuesToDefault0Value extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ItemOptionValue::all()->each(function($item) { 
            $value1_wholesale=$item->value1_wholesale;
            $value1_retail=$item->value1_retail;
            $value2_wholesale=$item->value2_wholesale;
            $value2_retail=$item->value2_retail;

            if($value1_wholesale!='' && $value1_wholesale!=null && !is_numeric($value1_wholesale))
            {
                $new_value1_wholesale=0;
            }
            else if($value1_wholesale==null || $value1_wholesale=='')
            {
                $new_value1_wholesale=0;
            }
            else
            {
                $new_value1_wholesale=$value1_wholesale;
            }

            if($value1_retail!='' && $value1_retail!=null && !is_numeric($value1_retail))
            {
                $new_value1_retail=0;
            }
            else if($value1_retail==null || $value1_retail=='')
            {
                $new_value1_retail=0;
            }
            else
            {
                $new_value1_retail=$value1_retail;
            }


            if($value2_wholesale!='' && $value2_wholesale!=null && !is_numeric($value2_wholesale))
            {
                $new_value2_wholesale=0;
            }
            else if($value2_wholesale==null || $value2_wholesale=='')
            {
                $new_value2_wholesale=0;
            }
            else
            {
                $new_value2_wholesale=$value2_wholesale;
            }

            if($value2_retail!='' && $value2_retail!=null && !is_numeric($value2_retail))
            {
                $new_value2_retail=0;
            }
            else if($value2_retail==null || $value2_retail=='')
            {
                $new_value2_retail=0;
            }
            else
            {
                $new_value2_retail=$value2_retail;
            }

            $value1_wholesale=$item->value1_wholesale;
            $value1_retail=$item->value1_retail;
            $value2_wholesale=$item->value2_wholesale;
            $value2_retail=$item->value2_retail;
            $a=$item->update(['value1_wholesale'=>$new_value1_wholesale,'value1_retail'=>$new_value1_retail,'value2_wholesale'=>$new_value2_wholesale,'value2_retail'=>$new_value2_retail]);
        });
    }
}
