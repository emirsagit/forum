<div class="flex my-2 pl-2">
   <div class="flex mr-2">1</div>
   <div class="flex flex-1 mr-2">
      <div class="flex flex-col w-full ">
         <div class="flex items-center mb-2">
            <a href="/threads/?by={{ $reply->owner->name }}">
               <h4 class="font-bold text-l cursor-pointer hover:underline">{{ $reply->owner->name }}</h4>
            </a>
            <p class="text-xs text-gray-500 ml-2 flex-1">{{ $reply->created_at->diffForHumans() }}</p>
            @if(! $reply->isFavourited()) 
            <form action="{{ route('favourite.store', compact('reply')) }}" method="POST">
               @csrf
               <button type="submit"
                  class="button rounded text-sm text-white bg-gray-500 hover:bg-white hover:text-gray-700 p-1"
                  >Beğen</button>
            </form>
            @endif
         </div>
         <p class="text-sm text-gray-700 mb-2">{{ $reply->body }}</p>
         @if($reply->favourites_count > 0)
         <div class="text-blue-500 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               class="w-5 h-5">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p class="text-sm">
               {{ $reply->favourites_count }} beğeni
            </p>
         </div>
         @endif
      </div>
   </div>
</div>
<hr>