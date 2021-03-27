@extends('layouts.app')
@section('content')
<div class="pb-24 min-h-screen">
    <div class="flex w-full h-24 bg-navy text-white font-bold px-4 text-center">
        <div class="flex m-auto">
            <h1 class="text-2xl">@if($setting) {{ $setting->home_h1 }} @else Foruma Hoşgeldiniz @endif</h1>
        </div>
    </div>
    <div class="flex flex-row flex-wrap-reverse mt-4 lg:w-4/5 lg:m-auto lg:mt-8 px-2">
        <div class="md:w-1/2 mb-4">
            <img src="/img/parkinson-hastasi.jpg" alt="parkinson hastası" width="1000" height="667"
                class="rounded-lg shadow-lg">
        </div>
        @if ($setting)
        <div class="md:w-1/2 px-4 text-gray-800 text-justify mb-4">
            <p class="text-lg">
                {!! $setting->about !!}
            </p>
        </div>
        @endif
    </div>
    <div class="text-center w-full mt-4 font-bold text-teal-800 text-2xl">
        <p>Forum</p>
    </div>
    @isset ($channel)
    <threads :data="{{ $threads->toJson() }}" :trendings="{{ $trendings }}" :channels="{{ $channels }}" :data-channel="{{ $channel }}"></threads>
    @else
    <threads :data="{{ $threads->toJson() }}" :trendings="{{ $trendings }}" :channels="{{ $channels }}"></threads>
    @endif
</div>
@endsection