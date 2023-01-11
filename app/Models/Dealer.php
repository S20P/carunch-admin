<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Dealer extends Authenticatable
{
   // use HasFactory; 
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'licence',
        'address',
        'state',
        'inventory_location',
        'contact_first_name',
        'contact_last_name',
        'mobile',
        'email',
        'carfax_api',
        'autocheck_api',
        'billtrust_account',
        'password',
    ];

    protected $appends = [
        'dealer_full_name',
        'point_contact_full_name'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getDealerFullNameAttribute()
    {
        return $this->first_name." ".$this->last_name;
    }

    public function getPointContactFullNameAttribute()
    {
        return $this->contact_first_name." ".$this->contact_last_name;
    }
}
