@extends('layouts.app')
@section('head')

<title>
    {{ config('app.name') }} | Konulara göre arama sayfası
</title>
<meta name="description" content="Sayfamızda konulara tüm forum içerisinde konulara göre arama yapabilirsiniz."> 

@endsection
@section('content')

<div class="flex w-full h-24 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
    <div class="flex m-auto">
        <h1 class="text-l">Arama Sonuçları</h1>
    </div>
</div>
<div class="flex flex-col lg:w-1/2 p-2 pt-4 m-auto min-h-screen pb-24">
    <p class="text-lg text-red-700 m-4">İçerisinde "{{ $search }}" ifadesi ya da ifadelerinden birisi bulunan {{ $searchResults->count() }} konu başlığı bulduk.</p>
    @forelse ($searchResults as $result)
    <div class="mb-4">
        <a href="{{ $result->url }}" class="text-gray-700 hover:text-blue-700 underline text-lg">{{ $result->title }}</a>
    </div>
    @empty
    <div>
        <p>Üzgünüz. Aramanıza uygun bir sonuç bulamadık.</p>
    </div>
    @endforelse
</div>
@endsection