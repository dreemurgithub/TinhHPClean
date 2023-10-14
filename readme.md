# Course Schedule Calculator

#### Video Demo: <https://youtu.be/HYu7gRNMUUM>

#### Description:

A simple course length calculator that I made back when I started to learn Programming on my own. Back then I didnt know about class or how to write it optimally. The app allow user to input the first start date, the number of days in the course, and the schedule. The output is all the dates, convert to string(for simple looking up in excel)

- UI For select first date, and make sure the first day in selection is sunday, the last day is sartuday. In a 5 rows 7 columns to align from sunday to saturday
- UI for selecting the weekly schedule(sunday to saturday) and the number of day
- Return day to table cells to copy from HTML page to excel tables
- The excel table actually have a script to run by looking up the string date. So it need the exact string: May 12th will become "12:5", or December 20th become "20:12"
- It also need to display in wekday list, from Sunday to sartuday. If the string is "15:9", "17:9", "22:9", "24:9", we should display them in table row sunday, friday, which sunday contain "17:9" and "24:9" and friday contain "15:9" and "22:9" (example in 2023)
- [This is the old project](https://github.com/dreemurgithub/tinhhocphi)
- [Link to github of this project, since writing the code on web IDE is too troublesome](https://github.com/dreemurgithub/TinhHPClean)
