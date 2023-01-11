<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspectionType extends Model
{
    use HasFactory;

    protected $fillable = [
        'location_id',
        'type',
        'vehicle_types',
        'status'
    ];

   public function locationName()
   {
       return $this->belongsTo(InspectionLocation::class,'location_id','id');
   }
}
