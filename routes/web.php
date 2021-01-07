<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return \Inertia\Inertia::render('Home', [
        'name' => 'World'
    ]);
});

Route::get('/users', function () {
    $users = \App\Models\User::all();

    return \Inertia\Inertia::render('Users', [
        'users' => $users
    ]);
})->name('users');
