## Introduction

<div style="text-align: justify; font-size: 18px;font-family: 'Nunito Sans',sans-serif;">
All the electrical equipment and machines work on supplying electric power and dissipate large amounts of energy. The supplied power is usually measured in terms of watts using a device namely wattmeter. A wattmeter is also called as deflection meter which is mainly used in electrical labs. It not only measure power in terms of watts but also measures in terms of Kilowatts and Megawatts. The wattmeter usually consists of two coils <b>"CC</b>" current coil which is usually connected in series with load current and a voltage/pressure/ potential coil "<b>PC</b>", this coil is usually connected across the load circuit. The electrical power can be represented in three forms they are Active power, Reactive power and Apparent power. The following theory describes the two wattmeter method at balanced load condition.<br>

### What is Two Wattmeter Method? 
A three-phase two wattmeter measures the current and voltage from any of the 2 supply lines of 3 phase corresponding to the 3rd supply line of 3 phase. The 3 phase two Wattmeter is said to be at a balanced load condition if the current in every phase lag at an angle "<b>φ</b>" with phase voltage.<br>

### Construction of Two Wattmeter Method
  The 3-phase power of a 3-phase circuit can be measured using three ways:  
* Three Wattmeter Method  
* Two Wattmeter Method  
* One Wattmeter Method<br>

The main concept of two Wattmeter with 3 phase voltage is to balance the 3 phase load by satisfying the condition of current lagging at an angle ‘φ’ with the phase voltage. The circuit diagram of 3 phase two wattmeter is shown below:<br>

<center>

![circuit](images/ckt1.png)  

**Fig. 1 Three phase power measurement using Two Wattmeter**
</center>

 It consists of two Wattmeters like P<sub>1</sub> and P<sub>2</sub>, Where each wattmeter has a current coil ‘CC’ and a pressure coil ‘PC’. Here, One end of wattmeter P<sub>1</sub> is connected to ‘1’ terminal whereas one end of wattmeter P<sub>2</sub> is connected to ‘2’ terminal. The circuit also consists of 3 resistors which are constructed in a star topology. The two ends of resistors are connected to 2nd terminals of a wattmeter whereas the third terminal of the resistor is connected to 3.


#### **Derivation of Two Wattmeter Method**<br>
Two Wattmeter is used to determine two main parameters they are,
* Active Power
* Power factor <br>

Consider the load used as resistive load which is represented by following the phasor diagram as shown below.
<br>

<center> 

![circuit](images/ckt2.png) 

**Fig 2. Phasor diagram for balanced Star Connected Load**
</center>

Instantaneous power consumed by load = v<sub>1</sub>i<sub>1</sub> + v<sub>2</sub>i<sub>2</sub> + v<sub>3</sub>i<sub>3</sub>

Let us consider two wattmeters connected to measure power in three phase circuits as shown in Fig. 1 Star connection.

Instantaneous reading of P<sub>1</sub> wattmeter p<sub>1</sub> = i<sub>1</sub> (v<sub>1</sub>-v<sub>3</sub>).

Instantaneous reading of P<sub>2</sub> wattmeter p<sub>2</sub> = i<sub>2</sub> (v<sub>2</sub>-v<sub>3</sub>). 

Sum of Instantaneous readings of two wattmeters = p<sub>1</sub> + p<sub>2</sub>

<center>

$=i_1 (v_1-v_3) + i_2 (v_2-v_3) = v_1i_1 + v_2i_2 - v_3 (i_1+i_2)$

</center>

From Kirchhoff's law,

<center>

$i_1 + i_2 + i_3 = 0$ 

</center>

<center>

$i_3 = -(i_1+i_2)$

</center>

Therefore, Sum of Instantaneous readings of two wattmeters = v<sub>1</sub>i<sub>1</sub> + v<sub>2</sub>i<sub>2</sub> + v<sub>3</sub>i<sub>3</sub>

Therefore, The sum of the two wattmeter reading is equal to the power consumed by the load. This is irrespective of whether the load is balanced or unbalanced.

Let V<sub>1</sub>, V<sub>2</sub>, V<sub>3</sub> be the rms values of phase voltage and I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub> be the rms values of phase currents.

The load is balanced, therefore

Phase voltages V<sub>1</sub> = V<sub>2</sub> = V<sub>3</sub> = V (say)

Line voltages V<sub>13</sub> = V<sub>23</sub> = V<sub>12</sub> = √3V

Phase currents I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub> = I (say)

Line currents I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub> = I

Power factor = cosφ 

The phase currents lag the corresponding phasor voltages by an angle φ.

The current through wattmeter P<sub>1</sub> is I<sub>1</sub> and voltage across its pressure coil is V<sub>13</sub>. I<sub>1</sub> leads V<sub>13</sub> by an angle (30° - φ).

Therefore, Reading of P<sub>1</sub> wattmeter, 

<center>

$P_1 = V_{13}I_1cos(30° - φ) = √3VIcos(30° - φ)$

</center>

The current through wattmeter P<sub>2</sub> is I<sub>2</sub> and voltage across its pressure coil is V<sub>23</sub>. I<sub>2</sub> lags V<sub>23</sub> by an angle (30° + φ).

Therefore, Reading of P<sub>2</sub> wattmeter, 

<center>

$P_2 = V_{23}I_2cos(30° + φ) = √3VIcos(30° + φ).$

</center>

Sum of reading of two wattmeters, 

<center>

$P_1 + P_2= √3VI[cos(30° - φ) + cos(30° + φ)] = 3VIcosφ$

</center>

This is the total power consumed by load.

Therefore, Total power consumed by load P = P<sub>1</sub> + P<sub>2</sub>

Difference of readings of two wattmeters

<center>

$P_1-P_2 = √3VI[cos(30° - φ) - cos(30° + φ)] = √3VIsinφ$

</center>

<center>

$\frac{P1-P2}{P1+P2} = \frac{√3VIsinφ}{3VIcosφ} = \frac{tanφ}{√3}$

</center>

<center>

$φ = tan^{-1}√3\frac{P1-P2}{P1+P2}$

</center>

Power factor, 

<center>

$cosφ = cos \left (tan^{-1}√3\frac{P1-P2}{P1+P2} \right )$

</center>

### Advantages of Two Wattmeter Method:

* Both balanced and unbalanced load can be balanced using this method.
* In a star connected load, it is optional to connect neutral point and wattmeter.
* In a delta, connected load connections need not be opened to connect wattmeter.
* 3 phase power can be measured using two wattmeter.
* Both power and power factor is determined on a balanced load condition.

### Disadvantages of Two Wattmeter Method:
* Not suitable for 3 phase, 4 wire system.
* Primary windings P<sub>1</sub> and secondary windings P<sub>2</sub> must be identified correctly to prevent incorrect results.  


### Applications of Two Wattmeter
* Wattmeters are used to measure the power consumption of any electrical appliances.
</div>