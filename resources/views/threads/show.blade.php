@extends('layouts.app')

@section('content')
<div class="flex w-full h-24 bg-blue-600 text-white">
   <div class="flex m-auto">
      <h1 class="text-l">{{ $thread->title }}</h1>
   </div>
</div>
<div class="lg:flex lg:flex-row mt-2 lg:w-4/5 lg:m-auto lg:mt-8">
   <div class="flex lg:flex-col lg:w-1/4 lg:h-screens pl-4 lg:pl-0">
      <a href="#"
         class="flex bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 lg:justify-center md:hover:bg-gray-100">
         Paylaş
      </a>
      <a href="{{ route('login') }}"
         class="flex justify-center invisible bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow mb-2 lg:visible md:hover:bg-blue-600">
         Giriş Yap
      </a>
      <div class="invisible lg:visible">
         Bir şeyler
      </div>
   </div>
   <div class="flex flex-col px-4 lg:w-3/4">
      <div class="flex mb-2 p-2 cursor-pointer">
         <div class="flex mr-2">1</div>
         <div class="flex flex-1 mr-2">
            <div class="flex flex-col">
               <div class="flex items-center mb-2">
                  <h4 class="font-bold text-l">{{ $thread->owner->name }}</h4>
                  <p class="text-xs text-gray-500 ml-2">{{ $thread->created_at->diffForHumans() }}</p>
               </div>
               <p class="text-sm text-gray-700">{{ $thread->body }}</p>
            </div>
         </div>
         <div class="flex">
            <div class="px-2 bg-gray-200 max-content">
               <p class="text-gray-700">0</p>
            </div>
         </div>
      </div>
   </div>
   <hr>
   @foreach($thread->replies as $reply)
   <div class="flex flex-col px-4 lg:w-3/4">
      <div class="flex mb-2 p-2 cursor-pointer">
         <div class="flex mr-2">1</div>
         <div class="flex flex-1 mr-2">
            <div class="flex flex-col">
               <div class="flex items-center mb-2">
                  <h4 class="font-bold text-l">{{ $reply->owner->name }}</h4>
                  <p class="text-xs text-gray-500 ml-2">{{ $reply->created_at->diffForHumans() }}</p>
               </div>
               <p class="text-sm text-gray-700">{{ $reply->body }}</p>
            </div>
         </div>
      </div>
   </div>
   <hr>
   @endforeach
</div>
@endsection