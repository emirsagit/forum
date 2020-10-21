<div class="flex my-2 pl-2">
    <div class="flex mr-2">1</div>
    <div class="flex flex-1 mr-2">
       <div class="flex flex-col">
          <div class="flex items-center mb-2">
            <a href="/threads/?by={{ $reply->owner->name }}"><h4 class="font-bold text-l cursor-pointer hover:underline">{{ $reply->owner->name }}</h4></a>
             <p class="text-xs text-gray-500 ml-2">{{ $reply->created_at->diffForHumans() }}</p>
          </div>
          <p class="text-sm text-gray-700">{{ $reply->body }}</p>
       </div>
    </div>
 </div>
 <hr>