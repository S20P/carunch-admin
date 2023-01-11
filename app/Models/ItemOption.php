<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemOption extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_type_id',
        'inspection_location_id',
        'inspection_item_id',
        'status',
    ];

    public function locationName()
    {
        return $this->belongsTo(InspectionLocation::class, 'inspection_location_id', 'id');
    }

    public function typeName()
    {
        return $this->belongsTo(InspectionType::class, 'inspection_type_id', 'id');
    }

    public function itemName()
    {
        return $this->belongsTo(InspectionItem::class, 'inspection_item_id', 'id')->orderBy('position','asc');
    }

    public function itemAttribute()
    {
        return $this->hasMany(ItemOptionAttribute::class);
    }
}
