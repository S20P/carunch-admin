<?php

namespace Database\Seeders;

use App\Models\ItemOptionAttribute;
use App\Models\ItemOptionValue;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptionJsonAttributeAddInNewTabelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ItemOptionAttribute::all()->each(function ($item) {
            if($item->inspection_item_id=='' || $item->inspection_item_id==null)
            {
                $inspection_item_id = $item->hasItemOptions->inspection_item_id;
                $item->inspection_item_id=$inspection_item_id;
                $item->save();
                $label_options = $item->label_options;
                $label_options = json_decode($label_options);
                $datas_value = [
                    'item_option_attributes_id' => $item->id,
                    'label1' => ($item->label_type != 'checkbox') ? null :$label_options->option_label,
                    'value1_wholesale' => ($item->label_type != 'checkbox') ? null :$label_options->option_value_wholesale,
                    'value1_retail' => ($item->label_type != 'checkbox') ? null :$label_options->option_value_retail,
                    'label2' => ($item->label_type != 'checkbox') ? null :$label_options->option_label2,
                    'value2_wholesale' => ($item->label_type != 'checkbox') ? null :$label_options->option_value2_wholesale,
                    'value2_retail' => ($item->label_type != 'checkbox') ? null :$label_options->option_value2_retail,
                ];
                $result_sub_value = ItemOptionValue::create($datas_value);
            }
        });
    }
}
