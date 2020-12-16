@extends('layouts.app')
@section('head')
<title>
   @if($thread->thread_title) {{ $thread->thread_title }}
   @else {{ $thread->title }}
   @endif
</title>
<meta name="description" content="
   @if($thread->thread_description) {{ $thread->thread_description }} 
   @else {{ $thread->title }} | {{ config('app.name') }}
   @endif">
@endsection

@section('content')
<thread :data-thread="{{ $thread }}" inline-template>
   <div class="pb-24">
      <div class="flex w-full h-24 bg-{{ $thread->channel->color }}-600 text-white">
         <div class="flex m-auto">
            <h1 class="text-xl" v-text='thread.title'></h1>
         </div>
      </div>
      <div class="flex flex-col lg:flex-row mt-2 lg:w-3/4 lg:m-auto lg:mt-8 pb-4">
         <div class="flex flex-col lg:w-5/6">
            <div class="flex flex-col my-2 pl-2 bg-white mx-1 rounded-lg">
               <div class="flex flex-row">
                  <div class="flex mt-2">
                     @if (strlen($thread->owner->avatar_path) == 1)
                     <div
                        class="bg-{{ $thread->channel->color }}-600 w-10 h-10 rounded-full flex flex-col items-center justify-center">
                        <p class="text-white font-semibold text-xl">{{ $thread->owner->avatar_path }}</p>
                     </div>
                     @else
                     <img class="inline-block h-10 w-10 rounded-full text-white shadow-solid"
                        src={{ $thread->owner->avatar_path }} alt={{ $thread->owner->name }} />
                     @endif
                  </div>
                  <div class="flex flex-1 mr-2 p-2">
                     <div class="flex flex-col w-full">
                        <div class="flex flex-row mb-2">
                           <div class="flex flex-1 items-center">
                              <a href="#">
                                 <a class="font-bold text-l hover:underline"
                                    href="{{ route('profiles.show', ['user' => $thread->owner]) }}">{{ $thread->owner->username }}</a>
                              </a>
                              <p class="text-xs text-gray-500 ml-2">{{ $thread->created_at }}<span
                                    class="font-semi-bold text-xs text-gray-500 ml-2">Oluşturuldu</span></p>
                           </div>
                        </div>
                        <p class="text-sm text-gray-700" v-html="thread.body"></p>
                     </div>
                  </div>
               </div>
               @can('update', $thread)
               <div class="flex flex-row justify-end">
                  <div class="flex flex-row mr-2">
                     <a class="text-blue-600 hover:text-blue-800 mr-2" :href="'/threads/' + thread.slug + '/edit'"
                        title="düzenle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                           class="w-5 h-5">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                     </a>
                     <form action="{{ route('threads.destroy', compact('thread')) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="text-red-600 hover:text-red-800" type="submit" title="sil">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                              class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                           </svg>
                        </button>
                     </form>
                  </div>
               </div>
               @endcan
            </div>
            <best-reply :reply="bestReply"></best-reply>
            <hr>
            <replies :bestreply="bestReply" :thread="{{ $thread }}" :replies="{{ $replies->toJson() }}"
               @removed="repliesCount--" @added="repliesCount++">
            </replies>
         </div>
         <div
            class="ml-2 flex order-first lg:order-last lg:my-2 lg:flex-col lg:w-1/6 lg:h-screens pl-4 lg:pl-0 justify-center lg:justify-start">
            <subscribe-button :active="{{ json_encode($thread->isSubscribed) }}" v-if="this.$signedIn">
            </subscribe-button>
            <a href="#"
               class="flex bg-white text-gray-800 font-semibold py-1 px-2 lg:py-2 lg:px-4 border border-gray-400 rounded shadow mb-2 mt-2 lg:mt-0 lg:justify-center md:hover:bg-gray-100 mr-1 text-sm">
               Paylaş
            </a>
            <a href="#" @click.prevent="toggleLock" v-if="isAdmin"
               class="flex font-semibold  py-1 px-2 lg:py-2 lg:px-4 rounded shadow mb-2 mt-2 lg:mt-0 lg:justify-center mr-1 text-sm"
               v-text="locked ? 'Yoruma Kapalı' : 'Yoruma Kapat'"
               :class="locked ? 'bg-teal-500 text-white border border-teal-600 hover-teal-600' : 'text-gray-800 border border-gray-400 hover:bg-gray-100'">
            </a>
            <div class="hidden lg:flex text-gray-700 text-sm">
               <p>Toplam <span v-text="this.repliesCount"></span> yorum</p>
            </div>
         </div>
      </div>
   </div>
</thread>
@endsection