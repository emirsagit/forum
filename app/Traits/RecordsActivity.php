<?php

namespace App\Traits;

use App\Models\Activity;

trait RecordsActivity
{
    //you may override getActivitiesToRecord method in your model with proper model events. like updated, saved etc...
    protected static function getActivitiesToRecord()
    {
        return ['created'];
    }

    //it is automatically call when relational model called
    protected static function bootRecordsActivity()
    {
        if (auth()->guest()) {
            return;
        }

        foreach (static::getActivitiesToRecord() as $event) {
            static::$event(function ($model) use ($event) {
                $model->recordActivity($event);
            });
        }

        static::deleting(function ($model) {
            $model->activities()->delete();
        });
    }

    protected function recordActivity($event)
    {
        $this->activities()->create([
            'user_id' => auth()->user()->id,
            'type' => $this->getActivityType($event),
        ]);
    }

    protected function getActivityType($event)
    {
        return $event . '_' . strtolower(class_basename($this));
    }

    public function activities()
    {
        return $this->morphMany(Activity::class, 'subject');
    }
}
