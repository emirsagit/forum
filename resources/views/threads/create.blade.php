@extends('layouts.app')

@section('content')
<div class="flex w-full h-24 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
    <div class="flex m-auto">
        <h1 class="text-l">Yeni Konu Oluştur</h1>
    </div>
</div>
<thread-form recapthca-site-key="{{ config('services.recaptcha.key') }}">
</thread-form>
@endsection