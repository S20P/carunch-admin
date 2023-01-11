<?php

namespace App\Http\Middleware;
use App\Models\ModuleAction;
use Closure;
use Auth;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class GlobalWhole
{
   
    public function handle($request, Closure $next)
    {
        if($request->route()->getName()=='laravel-backup-panel.index')
        {
            if (!Auth::check()) {
                return redirect()->route('login');
            }
            else
            {
                    return $next($request);
            }
        }
        else
        {
            return $next($request);
        }
      
    }
}
