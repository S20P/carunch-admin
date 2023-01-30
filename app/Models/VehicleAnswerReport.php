<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleAnswerReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicle_id',
        'vehicle_inspection_item_id',
        'no_prior_event_observed',
    ];
    public function hasVehicleAnswerReportItem()
    {
        return $this->hasMany(VehicleAnswerReportItem::class, 'vehicle_answer_report_id', 'id');
    }
    public function hasVehicleData()
    {
       return $this->belongsTo(Vehicle::class,'vehicle_id','id')->withTrashed();
    }
    public function hasInspectionItems()
    {
       return $this->hasOne(VehicleInspectionItem::class,'id','vehicle_inspection_item_id');
    }

}
