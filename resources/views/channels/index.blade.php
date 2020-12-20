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
    <nav-channels></nav-channels>
    <div class="bg-gray-200" id="last-published">
        <div class="lg:px-24 lg:p-8 p-4">
            <p class="text-3xl font-extrabold pb-8 text-center text-{{ $channel->color }}-800">
                {{ $channel->name }} Kategorisinde Paylaşılan Yazılar:
            </p>
            <div class="flex flex-row flex-wrap">
                @forelse ($blogs as $blog)
                <div class="lg:w-1/2 w-full flex flex-row pb-8">
                    <div class="w-1/2 md:pt-0 flex flex-col justify-center">
                        <a href="{{ route('blogs.show', ['channel' => $blog->channel, 'blog' => $blog])  }}">
                            <img src="/storage/{{ $blog->image }}" alt="blogs.title" loading="lazy"
                                class="rounded-md hover:opacity-75 cursor-pointer shadow-xl">
                        </a>
                    </div>
                    <div class="w-1/2 px-2 md:pr-4 flex flex-col justify-center">
                        <a href="{{ route('blogs.show', ['channel' => $blog->channel, 'blog' => $blog])  }}">
                            <h4 class="font-bold md:text-2xl text-xl hover:opacity-75 cursor-pointer leading-tight">
                                {{ $blog->title }}
                            </h4>
                        </a>
                    </div>
                </div>
                @empty
                Maalesef ilgilendiğiniz konuda yazı bulamadık
                @endforelse
            </div>
        </div>
    </div>
</div>
@endsection