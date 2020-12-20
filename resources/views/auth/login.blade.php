@extends('layouts.app')

@section('content')
    <signin :login="control.login"></signin>
    <div class="lg:p-24 p-4 min-h-screen">
        <p class="text-red-600 text-2xl font-semibold text-center">İsteğinizi gerçekleştirmek için lütfen giriş yapın</p>
    </div>
@endsection
