@extends('layouts.app')

@section('content')
<div class="flex w-full h-24 bg-blue-600 text-white">
   <div class="flex m-auto">
      <h1 class="text-l">{{ $thread->title }}</h1>
   </div>
</div>
<div class="flex lg:flex-row mt-2 lg:w-3/4 lg:m-auto lg:mt-8 flex-col-reverse pb-4">
   <div class="flex flex-col px-4 lg:w-5/6">
      <div class="flex my-2 pl-2">
         <div class="flex mr-2">1</div>
         <div class="flex flex-1 mr-2">
            <div class="flex flex-col">
               <div class="flex items-center mb-2">
                  <a href="#">
                     <a class="font-bold text-l hover:underline" href="/threads/?by={{ $thread->owner->name }}">{{ $thread->owner->name }}</a>
                  </a>
                  <p class="text-xs text-gray-500 ml-2">{{ $thread->created_at->diffForHumans() }}<span
                        class="font-semi-bold text-xs text-gray-500 ml-2">Oluşturuldu</span></p>
               </div>
               <p class="text-sm text-gray-700">{{ $thread->body }}</p>
            </div>
         </div>
      </div>
      <hr>
      @foreach($thread->replies as $reply)
      @include('threads.partials.reply')
      @endforeach
      <div class="flex my-2 pl-2">
         <div class="flex flex-1 mr-2">
            @auth
            <reply-form :thread="{{ $thread }}">
            </reply-form>
            @else
            <div class="flex flex-col items-start">
               <div class="flex">
                  <signin-button class="bg-gray-300 text-gray-800 hover:bg-gray-100 mr-2" v-on:show="show">
                  </signin-button>
                  <register-button class="bg-gray-300 text-gray-800 hover:bg-gray-100" v-on:show="show">
                  </register-button>
               </div>
               <p class="text-gray-600 text-sm">Mesaj göndermek için giriş yapın ya da kayıt olun</p>
            </div>
            @endauth
         </div>
      </div>
   </div>
   <div class="flex lg:my-2 lg:flex-col lg:w-1/6 lg:h-screens pl-4 lg:pl-0">
      <a href="#"
         class="flex bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 mt-2 lg:mt-0 lg:justify-center md:hover:bg-gray-100">
         Paylaş
      </a>
      <div class="invisible lg:visible">
         Bir şeyler
      </div>
   </div>
</div>
@endsection