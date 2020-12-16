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
<div class="pb-24">
    <blog :data-blog="{{ $blog }}" :data-blogs="{{ $blogs }}"></blog>
</div>
@endsection