@extends('layouts.app')
@section('head')

<title>
    Başlık düzenleme sayfası | {{ config('app.name') }}
</title>
<meta name="description" content="Bu bölümden forumumuzda açtığınız başlıkları düzenleyebilirsiniz.">

@endsection

@section('content')
<div class="pb-24">
    <div class="flex w-full h-24 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div class="flex m-auto">
            <h1 class="text-xl">Düzenle</h1>
        </div>
    </div>
    <thread-edit-form :data-thread="{{ $thread }}">
    </thread-edit-form>
</div>
@endsection