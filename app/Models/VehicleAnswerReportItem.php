<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleAnswerReportItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicle_answer_report_id',
        'item_option_attribute_id',
        'item_option_answerd',
    ];
    protected $appends = [
        'question_type',
        'inspection_value',
    ];

    public function getQuestionTypeAttribute()
    {
        if ($this->item_option_attribute_id != '' && $this->item_option_attribute_id != null) {
            $ItemOptionAttribute = ItemOptionAttribute::where('id', $this->item_option_attribute_id)->get();
            if ($ItemOptionAttribute->isNotEmpty()) {
                return $ItemOptionAttribute[0]->label_type;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    public function hasVehicleAnswerReportData()
    {
        return $this->belongsTo(VehicleAnswerReport::class, 'vehicle_answer_report_id', 'id');
    }
    public function hasItemOptionAttributeseData()
    {
        return $this->belongsTo(ItemOptionAttribute::class, 'item_option_attribute_id', 'id');
    }

    public function getInspectionValueAttribute()
    {
         $item_option_answerd=$this->item_option_answerd;
        if ($this->hasVehicleAnswerReportData->hasVehicleData!=null) {
            $vehicle_wholesale_value=$this->hasVehicleAnswerReportData->hasVehicleData->vehicle_wholesale_value;
            $vehicle_retail_value=$this->hasVehicleAnswerReportData->hasVehicleData->vehicle_retail_value;
            if($this->hasVehicleAnswerReportData->no_prior_event_observed==false)
            {
                $hasItemOptionAttributeseData = $this->hasItemOptionAttributeseData;
                if ($hasItemOptionAttributeseData!=null) {
                    $type = $hasItemOptionAttributeseData->label_type;
                    if ($type == 'checkbox') {
                        $values = $hasItemOptionAttributeseData->getItemOptionValues;
                        if($values!==null) {
                            if($item_option_answerd==$values->label1)
                            {
                                $ws_per_val=$values->value1_wholesale;
                                $rl_per_val=$values->value1_retail;
                            }
                            else
                            {
                                $ws_per_val=$values->value2_wholesale;
                                $rl_per_val=$values->value2_retail;
                            }
                            $whole_per_value = ((float)$vehicle_wholesale_value * (float)$ws_per_val)/100;
                            $reatail_per_value = ((float)$vehicle_retail_value * (float)$rl_per_val)/100;
                            return [
                                'wholesale' => $whole_per_value,
                                'retail' => $reatail_per_value,];
                        }
                        else
                        {
                            return null;
                        }
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
            else
            {
                return null;
            }
            
        } else {
            return null;
        }
    }
}
