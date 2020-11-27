@extends('layouts.app')

@section('content')
<thread :data-thread="{{ $thread }}" inline-template>
   <div>
      <div class="flex w-full h-24 bg-blue-600 text-white">
         <div class="flex m-auto">
            <h1 class="text-l" v-text='thread.title'></h1>
         </div>
      </div>
      <div class="flex flex-col lg:flex-row mt-2 lg:w-3/4 lg:m-auto lg:mt-8 pb-4">
         <div class="flex flex-col lg:w-5/6">
            <div class="flex flex-col my-2 pl-2">
               <div class="flex flex-row">
                  <div class="flex mr-2 p-2">1</div>
                  <div class="flex flex-1 mr-2 p-2">
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
                        </div>
                        <p class="text-sm text-gray-700" v-html="thread.body"></p>
                     </div>
                  </div>
               </div>
               @can('update', $thread)
               <div class="flex flex-row"
               :class="updateFormActive ? 'justify-center' : 'justify-end'"
               >
                  <div class="flex flex-row mr-2" v-show="! updateFormActive">
                     <a class="text-blue-600 hover:text-blue-800 mr-2" :href="'/threads/' + thread.slug + '/edit'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                     </a>
                     {{-- <thread-update-button></thread-update-button> --}}
                     <form action="{{ route('threads.destroy', compact('thread')) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="text-red-600 hover:text-red-800" type="submit">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                           </svg>
                        </button>
                     </form>
                  </div>
                  <thread-update-form v-show="updateFormActive" :data-thread="thread" @updated="updated"></thread-update-form>
               </div>
               @endcan
            </div>
            <best-reply :reply="bestReply"></best-reply>
            <hr>
            <replies :bestreply="bestReply" :thread="{{ $thread }}" @removed="repliesCount--" @added="repliesCount++">
            </replies>
         </div>
         <div class="flex order-first lg:order-last lg:my-2 lg:flex-col lg:w-1/6 lg:h-screens pl-4 lg:pl-0">
            <subscribe-button :active="{{ json_encode($thread->isSubscribed) }}" v-if="this.$signedIn">
            </subscribe-button>
            <a href="#"
               class="flex bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 mt-2 lg:mt-0 lg:justify-center md:hover:bg-gray-100">
               Paylaş
            </a>
            <a href="#" @click.prevent="toggleLock"
               class="flex font-semibold py-2 px-4 rounded shadow mb-2 mt-2 lg:mt-0 lg:justify-center"
               v-text="locked ? 'Yoruma Kapalı' : 'Yoruma Kapat'"
               :class="locked ? 'bg-teal-500 text-white border border-teal-600 hover-teal-600' : 'text-gray-800 border border-gray-400 hover:bg-gray-100'">
            </a>
            <div class="invisible lg:visible text-gray-700">
               <p>Toplam <span v-text="this.repliesCount"></span> yorum</p>
            </div>
         </div>
      </div>
   </div>
</thread>
@endsection