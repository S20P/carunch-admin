<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Artisan;
use Log;
use Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use App\Jobs\backupDB;

class DatabaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        Artisan::call('backup:run', ['--only-db' => true, '--disable-notifications' => true]);
        $path = storage_path('app/carunch-database-backup/*');
        $latest_ctime = 0;
        $latest_filename = '';
        $files = glob($path);
        foreach ($files as $file) {
            if (is_file($file) && filectime($file) > $latest_ctime) {
                $latest_ctime = filectime($file);
                $latest_filename = $file;
            }
        }
        return response()->download($latest_filename);
    }

    // public function index()
    // {
    //     $disk = Storage::disk(config('laravel-backup.backup.destination.disks'));
    //     $files = $disk->files('/dbbkp/');
    //     $backups = [];
    //     foreach ($files as $k => $f) {
    //         if (substr($f, -4) == '.zip' && $disk->exists($f)) {
    //             $backups[] = [
    //                 'file_path' => $f,
    //                 'file_name' => str_replace(config('laravel-backup.backup.name') . 'dbbkp/', '', $f),
    //                 'file_size' => $disk->size($f),
    //                 'last_modified' => $disk->lastModified($f),
    //             ];
    //         }
    //     }
    //     $backups = array_reverse($backups);
    //     return view("backup.backups")->with(compact('backups'));
    // }

    // public static function humanFileSize($size, $unit = "")
    // {
    //     if ((!$unit && $size >= 1 << 30) || $unit == "GB")
    //         return number_format($size / (1 << 30), 2) . "GB";
    //     if ((!$unit && $size >= 1 << 20) || $unit == "MB")
    //         return number_format($size / (1 << 20), 2) . "MB";
    //     if ((!$unit && $size >= 1 << 10) || $unit == "KB")
    //         return number_format($size / (1 << 10), 2) . "KB";
    //     return number_format($size) . " bytes";
    // }

    // public function create1()
    // {
    //     try {
    //         /* only database backup*/
    //         Artisan::call('backup:run --only-db --disable-notifications');
    //         $output = Artisan::output();
    //         dd($output);
    //         Log::info("Backpack\BackupManager -- new backup started \r\n" . $output);
    //         session()->flash('success', 'Successfully created backup!');
    //         return redirect()->back();
    //     } catch (Exception $e) {
    //         session()->flash('danger', $e->getMessage());
    //         return redirect()->back();
    //     }
    // }

    // public function download($file_name)
    // {
    //     $file = config('laravel-backup.backup.name') . '/dbbkp/' . $file_name;
    //     $disk = Storage::disk(config('laravel-backup.backup.destination.disks'));

    //     if ($disk->exists($file)) {

    //         $fs = Storage::disk(config('laravel-backup.backup.destination.disks'))->getDriver();
    //         $stream = $fs->readStream($file);
    //         return \Response::stream(function () use ($stream) {
    //             fpassthru($stream);
    //         }, 200, [
    //             "Content-Type" => 'application/zip',
    //             "Content-Length" => '10240',
    //             "Content-disposition" => "attachment; filename=\"" . basename($file) . "\"",
    //         ]);
    //     } else {
    //         abort(404, "Backup file doesn't exist.");
    //     }
    // }

    // public function delete($file_name)
    // {
    //     $disk = Storage::disk(config('laravel-backup.backup.destination.disks'));
    //     if ($disk->exists(config('laravel-backup.backup.name') . '/dbbkp/' . $file_name)) {
    //         $disk->delete(config('laravel-backup.backup.name') . '/dbbkp/' . $file_name);
    //         session()->flash('delete', 'Successfully deleted backup!');
    //         return redirect()->back();
    //     } else {
    //         abort(404, "Backup file doesn't exist.");
    //     }
    // }
}
