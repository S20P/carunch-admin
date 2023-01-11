<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vehicle extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'vin_no',
        'vehicle_type_id',
        'vehicle_year',
        'vehicle_make',
        'vehicle_model',
        'vehicle_mileage',
        'vehicle_wholesale_value',
        'vehicle_retail_value',
        'customer_id',
        'inspector_id',
        'status',
        'is_inspection_done'
    ];

    protected $appends = [
        'vehicle_type',
        'inspector_full_name',
    ];

    public function getVehicleTypeAttribute()
    {
       if($this->vehicle_type_id!='' && $this->vehicle_type_id!=null)
       {
            $vehicle_name=VehicleType::where('id',$this->vehicle_type_id)->first();
            return $vehicle_name->name;
       }
       else
       {
        return '';
       }
    }

    public function hasCustomers()
    {
       return $this->belongsTo(Customer::class,'customer_id','id');
    }
    public function getInspectorFullNameAttribute()
    {
       if($this->inspector_id!='' && $this->inspector_id!=null)
       {
            $inspector=Inspector::where('id',$this->inspector_id)->first();
            return $inspector->first_name.' '.$inspector->last_name;
       }
       else
       {
        return '-';
       }
    }
    public function hasVehicleAnswerReport()
    {
       return $this->hasMany(VehicleAnswerReport::class,'vehicle_id','id');
    }
}
