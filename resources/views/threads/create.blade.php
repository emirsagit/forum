@extends('layouts.app')

@section('content')

<div class="flex w-full h-24 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-2xl font-bold">
    <div class="flex m-auto">
        <h1>Yeni Paylaşım Yap</h1>
    </div>
</div>
<thread-form recapthca-site-key="{{ config('services.recaptcha.key') }}">
</thread-form>
@endsection