<?php
use App\Http\Controllers\api\v1\LoginController;
use App\Http\Controllers\api\v1\OrderController;
use App\Http\Controllers\api\v1\InspectionQuestionController;
use App\Http\Controllers\HomeController;
use App\Models\OrderRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('questions', [InspectionQuestionController::class, 'question']);

Route::post('dealers/login', [LoginController::class, 'login']);
Route::post('dealers/register', [LoginController::class, 'register']);
Route::get('states', [LoginController::class, 'states']);
Route::get('vehicle-types', [LoginController::class, 'vehicle_types']);
Route::middleware('auth:api')->group(function () {
    Route::get('dealers/profile', [LoginController::class, 'profile']);
    Route::put('dealers/profile/{id}', [LoginController::class, 'profile_update']);
    Route::put('dealers/password/{id}', [LoginController::class, 'password_change']);
});

Route::post('order_request', [OrderController::class, 'order_request']);
Route::post('inspection-report', [InspectionQuestionController::class, 'saveInspectionReport']);
Route::get('questions-form/{encrypted_parameter}', [InspectionQuestionController::class, 'questionForm'])->name('questionForm');
