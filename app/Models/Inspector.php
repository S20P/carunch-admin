<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inspector extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'address',
        'state',
        'mobile',
        'email',
    ];

    protected $appends = [
        'inspector_full_name',
    ];

    public function getInspectorFullNameAttribute()
    {
        return $this->first_name." ".$this->last_name;
    }
}
