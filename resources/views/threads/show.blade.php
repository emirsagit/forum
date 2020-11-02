@extends('layouts.app')

@section('content')
<thread :count="{{ $thread->replies_count }}" inline-template>
   <div>
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
                  <div class="flex flex-col w-full">
                     <div class="flex flex-row mb-2">
                        <div class="flex flex-1 items-center">
                           <a href="#">
                              <a class="font-bold text-l hover:underline"
                                 href="{{ route('profiles.show', ['user' => $thread->owner]) }}">{{ $thread->owner->name }}</a>
                           </a>
                           <p class="text-xs text-gray-500 ml-2">{{ $thread->created_at->diffForHumans() }}<span
                                 class="font-semi-bold text-xs text-gray-500 ml-2">Oluşturuldu</span></p>
                        </div>
                        @can('update', $thread)
                        <form action="{{ route('threads.destroy', compact('thread')) }}" method="POST">
                           @csrf
                           @method('DELETE')
                           <button
                              class="flex px-2 py-1 bg-red-400 rounded text-white hover:bg-white hover:text-red-800"
                              type="submit">Sil</button>
                        </form>
                        @endcan
                     </div>
                     <p class="text-sm text-gray-700">{{ $thread->body }}</p>
                  </div>
               </div>
            </div>
            <hr>
            <replies :thread="{{ $thread }}" @removed="repliesCount--" @added="repliesCount++"></replies>
         </div>
         <div class="flex lg:my-2 lg:flex-col lg:w-1/6 lg:h-screens pl-4 lg:pl-0">
            <subscribe-button :active="{{ json_encode($thread->isSubscribed) }}"></subscribe-button>
            <a href="#"
               class="flex bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 mt-2 lg:mt-0 lg:justify-center md:hover:bg-gray-100">
               Paylaş
            </a>
            <div class="invisible lg:visible text-gray-700">
               <p>Toplam <span v-text="this.repliesCount"></span> yorum</p>
            </div>
         </div>
      </div>
   </div>
</thread>
@endsection