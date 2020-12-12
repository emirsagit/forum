@extends('layouts.app')
@section('head')

<title>
    Başlık oluşturma sayfası | {{ config('app.name') }}
</title>
<meta name="description" content="Bu bölümden forumumuzda yeni başlık açabilirsiniz." 

@endsection
@section('content')
<div class="flex w-full h-24 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
    <div class="flex m-auto">
        <h1 class="text-xl">Yeni Konu Oluştur</h1>
    </div>
</div>
<thread-form recapthca-site-key="{{ config('services.recaptcha.key') }}">
</thread-form>
@endsection