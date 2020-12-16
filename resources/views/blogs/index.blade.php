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
    <div class="bg-gray-200 flex flex-row justify-center sticky top-0 items-center py-4 overflow-x-auto">
        @foreach($channels as $channel)
        <a class="text-lg font-semibold px-2 rounded-md mr-8 text-white bg-{{ $channel->color }}-800 hover:bg-{{ $channel->color }}-600"
            href="/blogs/channels/{{ $channel->slug }}">
            #{{ $channel->name }}
        </a>
        @endforeach
    </div>
    <blogs :data-blogs="{{ $blogs->toJson() }}" :data-sliders="{{ $sliders->toJson() }}"></blogs>
</div>
@endsection