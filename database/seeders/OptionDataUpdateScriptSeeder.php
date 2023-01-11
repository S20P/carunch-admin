<?php

namespace Database\Seeders;

use App\Models\ItemOptionAttribute;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptionDataUpdateScriptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ItemOptionAttribute::all()->each(function($item) { 
            if($item->label_type=='checkbox')
            {
                $label_options=$item->label_options;
                $label_options=json_decode($label_options);
                if(!isset($label_options->option_value_wholesale))
                {
                    $option_label=$label_options->option_label;
                    $option_value=$label_options->option_value;
                    $option_label2=$label_options->option_label2;
                    $option_value2=$label_options->option_value2;
    
                    $option_label_new=$option_label;
                    $option_value_wholesale=$option_value;
                    $option_value_retail=$option_value;
                    $option_label2_new=$option_label2;
                    $option_value2_wholesale=$option_value2;
                    $option_value2_retail=$option_value2;
                    unset($label_options->option_label);
                    unset($label_options->option_label2);
                    unset($label_options->option_value);
                    unset($label_options->option_value2);
    
                    $label_options->option_label=$option_label_new;
                    $label_options->option_value_wholesale=$option_value_wholesale;
                    $label_options->option_value_retail=$option_value_retail;
                    $label_options->option_label2=$option_label2_new;
                    $label_options->option_value2_wholesale=$option_value2_wholesale;
                    $label_options->option_value2_retail=$option_value2_retail;
                    $label_options_new=json_encode($label_options);
                    $a=$item->update(['label_options'=>$label_options_new]);
                }
            }
        });
    }
}
