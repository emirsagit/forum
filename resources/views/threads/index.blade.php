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
<div class="flex w-full h-24 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
    <div class="flex m-auto">
        <h1 class="text-xl">@if($setting) {{ $setting->home_h1 }} @else Foruma Hoşgeldiniz @endif</h1>
    </div>
</div>
<threads :data="{{ $threads->toJson() }}" :trendings="{{ $trendings }}"></threads>
@endsection