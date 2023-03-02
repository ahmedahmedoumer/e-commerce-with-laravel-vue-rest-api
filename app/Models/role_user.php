<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class role_user extends Model
{
    use HasFactory;
    public function role_user():BelongsTo{
        return $this->belongsTo(User::class);
     }
}
