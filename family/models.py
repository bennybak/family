from django.db import models
from django.contrib.auth.models import User

# Represents the type of a chore (e.g., Cleaning, Laundry, Cooking, etc.)
class ChoreType(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)  # Optional description

    def __str__(self):
        return self.name

# Represents a specific chore (e.g., Cleaning the kitchen, Doing the laundry, etc.)
class Chore(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)  # Optional description
    is_recurring = models.BooleanField(default=False)  # Whether it's a recurring chore
    chore_type = models.ForeignKey(ChoreType, on_delete=models.SET_NULL, null=True, blank=True)  # Link to ChoreType

    def __str__(self):
        return f'{self.name} ({self.chore_type})'

# Represents the assignment of a chore to multiple users
class ChoreAssignment(models.Model):
    users = models.ManyToManyField(User)  # Allow multiple users to be assigned the same chore
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE)
    assigned_date = models.DateField()
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        user_names = ", ".join([user.username for user in self.users.all()])
        return f'{self.chore.name} assigned to {user_names} (Due: {self.due_date})'