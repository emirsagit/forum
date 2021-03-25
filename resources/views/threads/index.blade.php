@extends('layouts.app')
@section('head')
<title>
    @isset($channel) {{ $channel->channel_title }}
    @elseif($setting) {{ $setting->home_title }} | {{ config('app.name') }}
    @endif
</title>
<meta name="description" content="
   @isset($channel) {{ $channel->channel_description }} 
   @elseif ($setting) {{ $setting->home_description }} 
   @endif">
@endsection
@section('content')
<div class="pb-24 min-h-screen">
    <div class="flex w-full h-24 bg-navy text-white font-bold px-4 text-center">
        <div class="flex m-auto">
            <h1 class="text-2xl">@if($setting) {{ $setting->home_h1 }} @else Foruma Hoşgeldiniz @endif</h1>
        </div>
    </div>
    <threads :data="{{ $threads->toJson() }}" :trendings="{{ $trendings }}"></threads>
</div>
@endsection