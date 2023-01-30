<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleItemOptionAttribute extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'label_type',
        'vehicle_inspection_item_id',
    ];
    public function getItemOptionValues()
    {
        return $this->hasOne(VehicleItemOptionValue::class,'vehicle_item_option_attributes_id','id');
    }
    public function hasItemOptions()
    {
        return $this->belongsTo(ItemOption::class,'item_option_id','id');
    }
}
