<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemOptionValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_option_attributes_id',
        'label1',
        'value1_wholesale',
        'value1_retail',
        'label2',
        'value2_wholesale',
        'value2_retail',
    ];
}
