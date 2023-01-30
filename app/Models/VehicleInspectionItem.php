<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleInspectionItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_type_id',
        'inspection_location_id',
        'name',
        'position',
        'status',      
        'vehicle_order_report_id'
    ];
    protected $appends=[
        'inspection_location_name',
        'inspection_type_name',
    ];
   public function locationName()
   {
       return $this->belongsTo(InspectionLocation::class,'inspection_location_id','id');
   }

   public function typeName()
   {
       return $this->belongsTo(InspectionType::class,'inspection_type_id','id');
   }

   public function getItemOptionAttributes()
   {
       return $this->hasMany(VehicleItemOptionAttribute::class,'vehicle_inspection_item_id','id')->orderBy('id');
   }

   public function getInspectionLocationNameAttribute()
   {
      if($this->inspection_location_id!='' && $this->inspection_location_id!=null)
      {
            $InspectionLocation=InspectionLocation::find($this->inspection_location_id);   
            if($InspectionLocation)
            {
                return $InspectionLocation->name;
            }
            return '';
      }
      return '';
   }
   public function getInspectionTypeNameAttribute()
   {
      if($this->inspection_type_id!='' && $this->inspection_type_id!=null)
      {
            $InspectionType=InspectionType::find($this->inspection_type_id);   
            if($InspectionType)
            {
                return $InspectionType->type;
            }
            return '';
      }
      return '';
   }
}
