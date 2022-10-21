### Introduction
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All the electrical equipment and machines work on supplying electric power and dissipate large amounts of energy. The supplied power is usually measured in terms of watts using a device namely wattmeter. A wattmeter is also called as deflection meter which is mainly used in electrical labs. It not only measure power in terms of watts but also measures in terms of kilowatts and megawatts. The wattmeter usually consists of two coils “CC” current coil which is usually connected in series with load current and a voltage/ pressure / potential coil “PC”, this coil is usually connected across the load circuit. The electrical power can be represented in three forms they are real power, reactive power, and apparent power. The following article describes the two wattmeter method at balanced load condition.<br><br>

### What is Two Wattmeter Method? 
A three-phase two-watt meter measures the current and voltage from any of the 2 supply lines of 3 phase corresponding to the 3rd supply line of 3 phase. The 3 phase 2 wattmeter is said to be at a balanced load condition if the current in every phase lag at an angle “φ” with phase voltage.<br><br>

### Construction of Two Wattmeter Method
  The 3-phase power of a 3-phase circuit can be measured using 3 ways they are,  
* 3 Wattmeter Method  
* 2 Wattmeter Method  
* 1 Wattmeter Method.<br>

The main concept of 2 Wattmeter with 3 phase voltage is to balance the 3 phase load by satisfying the condition of current lagging at an angle ‘φ’ with the voltage phase. The schematic diagram of 3 phase 2 wattmeter is shown below

<br> <center>![circuit](images/circuit1.png)  

**Fig 1. Three phase power measurement using Two Wattmeter**
</center>

 It consists of 2 wattmeters like W<sub>1</sub> and W<sub>2</sub>, where each wattmeter has a current coil ‘CC’ and a pressure coil ‘PC’. Here, one end of wattmeter ‘W<sub>1</sub>’ is connected to ‘R’ terminal whereas one end of wattmeter ’W<sub>2</sub>′ is connected to’ Y’ terminal. The circuit also consists of 3 inductors ‘Z’ which are constructed in a star topology. The 2 ends of inductors are connected to 2 terminals of a wattmeter whereas the third terminal of the inductor is connected to B.


#### **Derivation of Two Wattmeter Method**<br>
Two Wattmeter is used to determine two main parameters they are,
* Power factor
* Reactive power. <br>

Consider the load used as an inductive load which is represented by following the phasor diagram as shown below.
<br>

<center> 

![circuit](images/circuit2.png) 

**Fig 2. Phasor diagram**
</center>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The voltages V<sub>RN</sub>, V<sub>YN</sub>, and V<sub>BN</sub> are electrically 1200 in phase with one other, we can observe that the current phase lags at the “φ<sub>0</sub> ” angle with voltage phase.

#### The current in wattmeter W<sub>1</sub> is represented as
W<sub>1</sub> = IR …….. (1)
#### where IR is current

#### The potential difference across the wattmeter W<sub>1</sub> coil is given as
W<sub>1</sub> = ~ V<sub>RB</sub> = [ ~ V<sub>RN</sub> – ~ V<sub>BN</sub> ] ……… (2)  

#### Where  V<sub>RN</sub> and V<sub>BN</sub> are voltages
#### The phase difference between the voltage ‘V<sub>YB</sub>‘ and current ‘I<sub>Y</sub> ‘ is given as (30° + φ )
#### Hence the power measured by wattmeter is given as
W<sub>2</sub> = V<sub>YB</sub> I<sub>Y</sub> cos ( 30° + φ ) ………….. (3)  

#### At balanced load condition,

IR = I<sub>Y</sub> = I<sub>B</sub> = I<sub>L</sub> and ………….. (4)   
V<sub>RY</sub> = V<sub>YB</sub> = V<sub>BR</sub> = V<sub>L</sub> ………… (5)  

#### Therefore we obtain wattmeter readings as

W<sub>1</sub> = V<sub>L</sub> I<sub>L</sub> cos( 30° – φ ) and ……………. (6)  
W<sub>2</sub> = V<sub>L</sub> I<sub>L</sub> cos ( 30° + φ ) …………….. (7)   

### Total Power Derivation<br>
#### The total wattmeter reading is given as  
W<sub>1</sub> + W<sub>2</sub> = V<sub>L</sub> I<sub>L</sub> cos( 30° – φ ) + V<sub>L</sub> I<sub>L</sub> cos ( 30° + φ ) ………….. (8)  
= V<sub>L</sub> I<sub>L</sub> [ cos( 30° – φ ) + cos ( 30° + φ ) ]  
= V<sub>L</sub> I<sub>L</sub> [ cos 30° cos φ + sin 30° sin φ + cos 30° cos φ – sin 30° sin φ ]  
= V<sub>L</sub> I<sub>L</sub> [ 2 cos 30° cos φ ]  
= V<sub>L</sub> I<sub>L</sub> [ (2 √3 / 2 ) cos 30° cos φ]  
= √3  [ V<sub>L</sub> I<sub>L</sub> cos φ ]    ……… (9)  
W<sub>1</sub> + W<sub>2</sub> = P ….. (10)  
#### Where ‘P’ is the total observed power in a 3-phase balanced load condition.   


### Power Factor Derivation<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is the ratio between actual power observed by the load to apparent power flowing in the circuit.The power factor of three phase balanced load condition can be determined and derived from wattmeter readings as  
#### From equation 9
W<sub>1</sub> + W<sub>2</sub> = √3 V<sub>L</sub> I<sub>L</sub> cos φ  
Now W<sub>1</sub> – W<sub>2</sub>  = V<sub>L</sub> I<sub>L</sub> [ cos( 30° – φ ) – cos ( 30° + φ ) ]  
= V<sub>L</sub> I<sub>L</sub> [ cos 30° cos φ + sin 30° sin φ – cos 30° cos φ + sin 30° sin φ ]  
= 2 V<sub>L</sub> I<sub>L</sub> sin 30° sin φ  
W<sub>1</sub> – W<sub>2</sub>= V<sub>L</sub> I<sub>L</sub> sin φ ………….. (11)  

#### Dividing equations 11 and 9

[W<sub>1</sub> – W<sub>2</sub> \ W<sub>1</sub> +W<sub>2</sub>] = V<sub>L</sub> I<sub>L</sub> sin φ / √3 V<sub>L</sub> I<sub>L</sub> cos φ      
Tan φ = √3 [W<sub>1</sub> – W<sub>2</sub>\W<sub>1</sub> +W<sub>2</sub>]  
#### The power factor of the load is given as 
cos φ = cos tan<sup>-1</sup> [√3] [W<sub>1</sub> – W<sub>2</sub> \ W<sub>1</sub> +W<sub>2</sub>] ………(12)  


### Reactive Power Derivation<br>
It is the ratio between complex power corresponding to storage and revival of energy rather than consumption.  
To obtain reactive power, we multiply equation 11 with  
√3 [W<sub>1</sub> – W<sub>2</sub> ]= √3 [V<sub>L</sub> I<sub>L</sub> sin φ] = P<sub>r</sub>   
P<sub>r</sub> = √3 [W<sub>1</sub> – W<sub>2</sub> ] …………. (13)      
Where P<sub>r</sub> is the reactive power obtained from 2 wattmeters. 

### Advantages of Two Wattmeter 

* Both balanced and unbalanced load can be balanced using this method
* In a star connected load, it is optional to connect neutral point and wattmeter
* In a delta, connected load connections need not be opened to connect wattmeter
* 3 phase power can be measured using two wattmeter’s
* Both power and power factor is determined on a balanced load condition.

### Disadvantages of Two Wattmeter
* Not suitable for 3 phase, 4 wire system
* Primary windings W<sub>1</sub> and secondary windings W<sub>2</sub> must be identified correctly to prevent incorrect results.  


### Applications of Two Wattmeter
* Wattmeters are used to measure the power consumption of any electrical appliances and verify their power ratings.