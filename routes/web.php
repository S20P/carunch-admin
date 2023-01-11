<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DatabaseController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DealerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InspectionItemController;
use App\Http\Controllers\InspectionLocationController;
use App\Http\Controllers\InspectionTypeController;
use App\Http\Controllers\OrderRequestController;
use App\Http\Controllers\InspectorController;
use App\Http\Controllers\ItemOptionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VehicleAnswerReportController;
use App\Http\Controllers\VehicleFormController;
use App\Http\Controllers\VehicleTypeController;
use App\Models\InspectionLocation;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'prevent-back-history'], function () {
    Route::get('/', function () {
        return redirect('login');
    });
    Auth::routes();
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::group(['middleware' => ['auth']], function () {
        Route::resource('dealers', DealerController::class);
        Route::resource('admins', UserController::class);
        Route::resource('vehicle', VehicleTypeController::class);
        Route::resource('inspection-location', InspectionLocationController::class);
        Route::resource('inspection-type', InspectionTypeController::class);
        Route::resource('inspection-item', InspectionItemController::class);
        Route::get('/get-inspection-types/{id}', [InspectionItemController::class, 'get_inspection_types'])->name('get-inspection-types');
        // Route::resource('inspection-item-option', ItemOptionController::class);
        Route::get('/get-inspection-items/{id}', [ItemOptionController::class, 'get_inspection_items'])->name('get-inspection-items');
        Route::get('/vehicle-forms/{code}', [VehicleFormController::class, 'index'])->name('get-vehicle-form-items');
        Route::resource('inspectors', InspectorController::class);
        Route::get('order_requests/deleted', [OrderRequestController::class,'indexDeleted'])->name('order_requests.indexDeleted');
        Route::get('order_requests/deleted/{id}', [OrderRequestController::class,'showDeleted'])->withTrashed()->name('order_requests.showDeleted');
        Route::post('order_requests/{id}/undelete',[OrderRequestController::class,'undelete'])->name('order_requests.undelete');
        Route::resource('order_requests', OrderRequestController::class);
        Route::get('/backup/create', [DatabaseController::class, 'create'])->name('backup.create');
        Route::resource('customers', CustomerController::class);
        Route::resource('inspection-report', VehicleAnswerReportController::class);
        Route::post('inspection-report/update-answers', [VehicleAnswerReportController::class,'update'])->name('update-answers');
       
    });
});
