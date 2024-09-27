from django.contrib import admin
from .models import ChoreType, Chore, ChoreAssignment

# Register ChoreType model
@admin.register(ChoreType)
class ChoreTypeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

@admin.register(Chore)
class ChoreAdmin(admin.ModelAdmin):
    list_display = ('name', 'chore_type', 'is_recurring')

@admin.register(ChoreAssignment)
class ChoreAssignmentAdmin(admin.ModelAdmin):
    filter_horizontal = ('users',)
