import React from 'react'
import './Calender.css';
function Calender() {
  return (
    <div className="content-1">
 <div class="wrapper">
    <div className="navbar">
        <div className="calender1">| MY CALENDER</div>
        <nav>
            <ul>
                <li><a href="">Class Schedule |</a></li>
                <li><a href="">Uploaded Work |</a></li>
                <li><a href="">Due Work |</a></li>
                <li><a href="">Today</a></li>


            </ul>
        </nav>
    </div>
        <header>
            <p class='current-date'>august 2023</p>
            <div class="icons">
              <span id="prev"><i class="fa-solid fa-angle-left"></i></span>
              <span id="next"><i class="fa-solid fa-angle-right"></i></span>
            </div>
        </header>
<div class="calendar">
    <ul class="weeks">
<li>sun</li>
<li>mun</li>
<li>tue</li>
<li>wed</li>
<li>thu</li>
<li>fri</li>
<li>sat</li>
    </ul>
    <ul class='days'>
        <li class="inactive">28</li>
        <li class="inactive">29</li>
        <li class="inactive">30</li>
        <li class="inactive">31</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li class="active">22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li class="inactive">1</li>
            </ul>
        </div>
    </div>
    </div>

  )
}
   


    export default Calender
 