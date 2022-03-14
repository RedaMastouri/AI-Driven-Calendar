'''
GUI Calendar using TKinter
'''
from calendar import Calendar
from tkinter import *
from tkcalendar import *

#Defining the GUI screen
screen = Tk()
screen.minsize(900, 600)
screen.title("Reda's Tasks")
screen.configure(background="#676665")

#Select date function
def select_date():
    mydate = myCal.get_date()
    print(mydate)
    return mydate

#Add event to date 
def add_event(event):
    '''#today = input("What is your current task?")
    w = event.widget
    date = w.get_date()

    task = myCal.calevent_create(date, 'Hello ...')
    #return task'''
    w = event.widget
    date = w.get_date()
    print('Selected Date:{}'.format(date))
    # <ref to Calendar>.calevent_create(date, 'Hello ...`)
    myCal.calevent_create(date, 'Hello ...')

#Defining my calendar with the screen size, and date pattern
myCal = Calendar(screen, setmode = 'day', date_pattern='d/m/yy')

#Defining the calendar layout from top
#myCal.pack(pady = 10)
myCal.pack(fill="both", expand=True)

# Adding a button to select date 
openCal = Button(screen, text="Select a Date", command = select_date)
#openCal.pack(pady = 50)
openCal.pack(fill="both", expand=True)

addEvent = Button(screen, text="Add an event", command = ("<<DateEntrySelected>>", add_event))
#addEvent.pack(pady = 50)
addEvent.pack(fill="both", expand=True)

#Binding all events
de=DateEntry(screen)  
de.pack()  
de.bind("<<DateEntrySelected>>", add_event)  

#To hold the GUI screen from not closing too fast
screen.mainloop()