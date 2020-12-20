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
<div class="pb-24 min-h-screen tracking-wide">
    <nav-channels></nav-channels>
    <blogs :data-blogs="{{ $blogs->toJson() }}" :data-sliders="{{ $sliders->toJson() }}" :data-trendings="{{ $trendings->toJson() }}" :data-threads="{{ $threads->toJson() }}"></blogs>
</div>
@endsection