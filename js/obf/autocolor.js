﻿var _0x292f=["\x68\x75\x65\x2D\x62\x61\x73\x65","\x68\x75\x65\x2D\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74","\x68\x75\x65\x2D\x72\x61\x6E\x67\x65","\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E\x2D\x62\x61\x73\x65","\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E\x2D\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74","\x76\x61\x6C\x75\x65\x2D\x62\x61\x73\x65","\x76\x61\x6C\x75\x65\x2D\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74","\x63\x6F\x6E\x66\x69\x67","\x65\x78\x74\x65\x6E\x64","\x66\x6C\x6F\x6F\x72","\x6D\x61\x78","\x6D\x69\x6E"]
var AutoColor=function ()
{
  var _0xf6b3x2={_0x292f[0]:0,_0x292f[1]:36,_0x292f[2]:10,_0x292f[3]:85,_0x292f[4]:-5,_0x292f[5]:100,_0x292f[6]:-15};
  function _0xf6b3x3(_0xf6b3x4,_0xf6b3x5,_0xf6b3x6)
  {
    var _0xf6b3x7=_0xf6b3x4;
    if(_0xf6b3x7<_0xf6b3x5)
    {
      _0xf6b3x7=_0xf6b3x5;
    }
    else 
    {
      if(_0xf6b3x7>_0xf6b3x6)
      {
        _0xf6b3x7=_0xf6b3x6;
      }
    }
    return _0xf6b3x7;
  }
  ;
  var _0xf6b3x8=function (_0xf6b3x2)
  {
    if(_0xf6b3x2)
    {
      this[_0x292f[7]]=$[_0x292f[8]](this[_0x292f[7]],_0xf6b3x2);
      this[_0x292f[7]][_0x292f[0]]=_0xf6b3x3(this[_0x292f[7]][_0x292f[0]],0,359);
      this[_0x292f[7]][_0x292f[1]]=_0xf6b3x3(this[_0x292f[7]][_0x292f[1]],1,359);
      this[_0x292f[7]][_0x292f[3]]=_0xf6b3x3(this[_0x292f[7]][_0x292f[3]],30,100);
      this[_0x292f[7]][_0x292f[5]]=_0xf6b3x3(this[_0x292f[7]][_0x292f[5]],30,100);
      this[_0x292f[7]][_0x292f[2]]=Math[_0x292f[9]](360/this[_0x292f[7]][_0x292f[1]]);
    }
  }
  ;
  function _0xf6b3x9(_0xf6b3xa,_0xf6b3xb,_0xf6b3xc)
  {
    _0xf6b3xa/=255;
    _0xf6b3xb/=255;
    _0xf6b3xc/=255;
    var _0xf6b3xd=Math[_0x292f[10]](_0xf6b3xa,_0xf6b3xb,_0xf6b3xc),_0xf6b3xe=Math[_0x292f[11]](_0xf6b3xa,_0xf6b3xb,_0xf6b3xc);
    var _0xf6b3xf,_0xf6b3x10,_0xf6b3x11=(_0xf6b3xd+_0xf6b3xe)/2;
    if(_0xf6b3xd==_0xf6b3xe)
    {
      _0xf6b3xf=_0xf6b3x10=0;
    }
    else 
    {
      var _0xf6b3x12=_0xf6b3xd-_0xf6b3xe;
      _0xf6b3x10=_0xf6b3x11>0.5?_0xf6b3x12/(2-_0xf6b3xd-_0xf6b3xe):_0xf6b3x12/(_0xf6b3xd+_0xf6b3xe);
      switch(_0xf6b3xd)
      {
        case _0xf6b3xa:_0xf6b3xf=(_0xf6b3xb-_0xf6b3xc)/_0xf6b3x12+(_0xf6b3xb<_0xf6b3xc?6:0);
        break ;
        case _0xf6b3xb:_0xf6b3xf=(_0xf6b3xc-_0xf6b3xa)/_0xf6b3x12+2;
        break ;
        case _0xf6b3xc:_0xf6b3xf=(_0xf6b3xa-_0xf6b3xb)/_0xf6b3x12+4;
        break ;
      }
      _0xf6b3xf/=6;
    }
    return [_0xf6b3xf,_0xf6b3x10,_0xf6b3x11];
  }
  ;
  function _0xf6b3x13(_0xf6b3xf,_0xf6b3x10,_0xf6b3x11)
  {
    var _0xf6b3xa,_0xf6b3xb,_0xf6b3xc;
    if(_0xf6b3x10==0)
    {
      _0xf6b3xa=_0xf6b3xb=_0xf6b3xc=_0xf6b3x11;
    }
    else 
    {
      function _0xf6b3x14(_0xf6b3x15,_0xf6b3x16,_0xf6b3x17)
      {
        if(_0xf6b3x17<0)
        {
          _0xf6b3x17+=1;
        }
        if(_0xf6b3x17>1)
        {
          _0xf6b3x17-=1;
        }
        if(_0xf6b3x17<1/6)
        {
          return _0xf6b3x15+(_0xf6b3x16-_0xf6b3x15)*6*_0xf6b3x17;
        }
        if(_0xf6b3x17<1/2)
        {
          return _0xf6b3x16;
        }
        if(_0xf6b3x17<2/3)
        {
          return _0xf6b3x15+(_0xf6b3x16-_0xf6b3x15)*(2/3-_0xf6b3x17)*6;
        }
        return _0xf6b3x15;
      }
      ;
      var _0xf6b3x16=_0xf6b3x11<0.5?_0xf6b3x11*(1+_0xf6b3x10):_0xf6b3x11+_0xf6b3x10-_0xf6b3x11*_0xf6b3x10;
      var _0xf6b3x15=2*_0xf6b3x11-_0xf6b3x16;
      _0xf6b3xa=_0xf6b3x14(_0xf6b3x15,_0xf6b3x16,_0xf6b3xf+1/3);
      _0xf6b3xb=_0xf6b3x14(_0xf6b3x15,_0xf6b3x16,_0xf6b3xf);
      _0xf6b3xc=_0xf6b3x14(_0xf6b3x15,_0xf6b3x16,_0xf6b3xf-1/3);
    }
    return [_0xf6b3xa*255,_0xf6b3xb*255,_0xf6b3xc*255];
  }
  ;
  function _0xf6b3x18(_0xf6b3xa,_0xf6b3xb,_0xf6b3xc)
  {
    _0xf6b3xa=_0xf6b3xa/255;
    _0xf6b3xb=_0xf6b3xb/255;
    _0xf6b3xc=_0xf6b3xc/255;
    var _0xf6b3xd=Math[_0x292f[10]](_0xf6b3xa,_0xf6b3xb,_0xf6b3xc),_0xf6b3xe=Math[_0x292f[11]](_0xf6b3xa,_0xf6b3xb,_0xf6b3xc);
    var _0xf6b3xf,_0xf6b3x10,_0xf6b3x7=_0xf6b3xd;
    var _0xf6b3x12=_0xf6b3xd-_0xf6b3xe;
    _0xf6b3x10=_0xf6b3xd==0?0:_0xf6b3x12/_0xf6b3xd;
    if(_0xf6b3xd==_0xf6b3xe)
    {
      _0xf6b3xf=0;
    }
    else 
    {
      switch(_0xf6b3xd)
      {
        case _0xf6b3xa:_0xf6b3xf=(_0xf6b3xb-_0xf6b3xc)/_0xf6b3x12+(_0xf6b3xb<_0xf6b3xc?6:0);
        break ;
        case _0xf6b3xb:_0xf6b3xf=(_0xf6b3xc-_0xf6b3xa)/_0xf6b3x12+2;
        break ;
        case _0xf6b3xc:_0xf6b3xf=(_0xf6b3xa-_0xf6b3xb)/_0xf6b3x12+4;
        break ;
      }
      _0xf6b3xf/=6;
    }
    return [_0xf6b3xf,_0xf6b3x10,_0xf6b3x7];
  }
  ;
  function _0xf6b3x19(_0xf6b3xf,_0xf6b3x10,_0xf6b3x7)
  {
    var _0xf6b3xa,_0xf6b3xb,_0xf6b3xc;
    var _0xf6b3x1a=Math[_0x292f[9]](_0xf6b3xf*6);
    var _0xf6b3x1b=_0xf6b3xf*6-_0xf6b3x1a;
    var _0xf6b3x15=_0xf6b3x7*(1-_0xf6b3x10);
    var _0xf6b3x16=_0xf6b3x7*(1-_0xf6b3x1b*_0xf6b3x10);
    var _0xf6b3x17=_0xf6b3x7*(1-(1-_0xf6b3x1b)*_0xf6b3x10);
    switch(_0xf6b3x1a%6)
    {
      case 0:_0xf6b3xa=_0xf6b3x7;
      _0xf6b3xb=_0xf6b3x17;
      _0xf6b3xc=_0xf6b3x15;
      break ;
      case 1:_0xf6b3xa=_0xf6b3x16;
      _0xf6b3xb=_0xf6b3x7;
      _0xf6b3xc=_0xf6b3x15;
      break ;
      case 2:_0xf6b3xa=_0xf6b3x15;
      _0xf6b3xb=_0xf6b3x7;
      _0xf6b3xc=_0xf6b3x17;
      break ;
      case 3:_0xf6b3xa=_0xf6b3x15;
      _0xf6b3xb=_0xf6b3x16;
      _0xf6b3xc=_0xf6b3x7;
      break ;
      case 4:_0xf6b3xa=_0xf6b3x17;
      _0xf6b3xb=_0xf6b3x15;
      _0xf6b3xc=_0xf6b3x7;
      break ;
      case 5:_0xf6b3xa=_0xf6b3x7;
      _0xf6b3xb=_0xf6b3x15;
      _0xf6b3xc=_0xf6b3x16;
      break ;
    }
    return [_0xf6b3xa*255,_0xf6b3xb*255,_0xf6b3xc*255];
  }
  ;
  var _0xf6b3x1c=function (_0xf6b3x1d)
  {
    var _0xf6b3x1e=this[_0x292f[7]][_0x292f[2]],_0xf6b3x1f=this[_0x292f[7]][_0x292f[0]],_0xf6b3x20=this[_0x292f[7]][_0x292f[1]],_0xf6b3x21=this[_0x292f[7]][_0x292f[3]],_0xf6b3x22=this[_0x292f[7]][_0x292f[4]],_0xf6b3x23=this[_0x292f[7]][_0x292f[5]],_0xf6b3x24=this[_0x292f[7]][_0x292f[6]],_0xf6b3x25=Math[_0x292f[9]](_0xf6b3x1d/_0xf6b3x1e),_0xf6b3x26=(_0xf6b3x1f+((_0xf6b3x1d%_0xf6b3x1e)*_0xf6b3x20))%360,_0xf6b3x27=_0xf6b3x21+_0xf6b3x25*_0xf6b3x22,_0xf6b3x28=_0xf6b3x23+_0xf6b3x25*_0xf6b3x24;
    if(_0xf6b3x27>100)
    {
      _0xf6b3x27-=70;
    }
    else 
    {
      if(_0xf6b3x27<30)
      {
        _0xf6b3x27+=70;
      }
    }
    if(_0xf6b3x28>100)
    {
      _0xf6b3x28-=70;
    }
    else 
    {
      if(_0xf6b3x28<30)
      {
        _0xf6b3x28+=70;
      }
    }
    var _0xf6b3x29=_0xf6b3x19(_0xf6b3x26/360,_0xf6b3x27/100,_0xf6b3x28/100);
    return [Math[_0x292f[9]](_0xf6b3x29[0]),Math[_0x292f[9]](_0xf6b3x29[1]),Math[_0x292f[9]](_0xf6b3x29[2])];
  }
  ;
  return {configure:_0xf6b3x8,config:_0xf6b3x2,color:_0xf6b3x1c};
}
();