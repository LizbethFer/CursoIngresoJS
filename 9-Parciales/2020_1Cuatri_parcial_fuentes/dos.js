/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
function mostrar()
{
  var respuesta;
  var tipoProductos;
  var CantBolsas;
  var CantBolsasArena;
  var CantBolsasCal;
  var CantBolsasCemento;
  var PrecioXBolsa;
  var Total;
  var Acumulador;
  var AcumuladorBolsas;
  var BanderaProductos;
  var BanderaCal;
  var BanderaCemento;
  var BanderaArena;
  var PrecioAPagarConDescuento;
  var Porcentaje;
  var PrecioArena;
  var PrecioCal;
  var PrecioCemento;

  BanderaProductos = true;
  BanderaArena = true;
  BanderaCal = true;
  BanderaCemento = true;
  respuesta="si";



  while (respuesta=="si") 
  {
    tipoProductos=prompt("Ingrese un producto  arena/cal/cemento");
    while (tipoProductos !="arena" && tipoProductos !="cal" && tipoProductos !="cemento") 
    {
      tipoProductos=prompt("ERROR! Ingrese un producto correcto"); 
    }

    CantBolsas=prompt("Ingrese cantidad de bolsas");
    CantBolsas = parseInt(CantBolsas);
    while (isNaN(CantBolsas)==true) 
    {
      CantBolsas=prompt("ERROR! Reingrese un numero valido"); 
      CantBolsas = parseInt(CantBolsas);

    }
    
    PrecioXBolsa=prompt("Ingrese el precio");
    PrecioXBolsa = parseInt(PrecioXBolsa);
    while (isNaN(PrecioXBolsa)==true || PrecioXBolsa<1) 
    {
      PrecioXBolsa=prompt("ERROR! Reingrese un numero valido");
      PrecioXBolsa = parseInt(PrecioXBolsa);
    }

    if (BanderaProductos == true) 
    {
      Acumulador = PrecioXBolsa * CantBolsas;
      AcumuladorBolsas = CantBolsas;

    }
    else
    {
      Total = PrecioXBolsa * CantBolsas;
      Acumulador = Acumulador + Total;
      AcumuladorBolsas = AcumuladorBolsas+CantBolsas;
    }
    BanderaProductos = false;

    switch (tipoProductos) {
      case "arena":
        if (BanderaArena == true) 
        {
          CantBolsasArena=CantBolsas;
          PrecioArena=PrecioXBolsa * CantBolsas;
        }
        BanderaArena = false;
        PrecioArena= PrecioArena + (PrecioXBolsa* CantBolsas);
        CantBolsasArena = CantBolsasArena+CantBolsas;
        break;

      case "cal":
        if (BanderaCal == true) 
        {
          CantBolsasCal=CantBolsas;
          PrecioCal=PrecioXBolsa * CantBolsas;
        }
        BanderaCal = false;
        PrecioCal= PrecioCal + (PrecioXBolsa* CantBolsas);
        CantBolsasCal = CantBolsasCal+CantBolsas;
        break;
      case "cemento":
        if (BanderaCemento == true) 
        {
          CantBolsasCemento=CantBolsas;
          PrecioCemento=PrecioXBolsa * CantBolsas;
        }
        BanderaCemento = false;
        PrecioCemento= PrecioCemento + (PrecioXBolsa* CantBolsas);
        CantBolsasCemento = CantBolsasCemento+CantBolsas;
        
        break;
        }

  
    
    respuesta=prompt("Desea continuar?  si/no");
  }

  //Descuento
  if (AcumuladorBolsas>10 && AcumuladorBolsas<31) 
  {
    Porcentaje=15;
  }
  else
  {
    if (AcumuladorBolsas>30) 
    {
      Porcentaje=30;
    }
  }
  PrecioAPagarConDescuento = Acumulador - (Acumulador*Porcentaje/100);

  if (Porcentaje == 15 || Porcentaje == 30) 
  {
    console.log("El precio con descuenro es : " + PrecioAPagarConDescuento); 
  }
  //Maximo Cantidad de bolsas

  if (CantBolsasArena>CantBolsasCal && CantBolsasArena > CantBolsasCemento) 
  {
    console.log("El Tipo con mas cantidad de bolsas es: Arena");
  }
  else
  {
    if (CantBolsasCal>CantBolsasArena && CantBolsasCal > CantBolsasCemento) 
    {
      console.log("El Tipo con mas cantidad de bolsas es: Cal");
    }
    else
    {
      console.log("El Tipo con mas cantidad de bolsas es: Cemento");

    }
  }
  //Maximo Precio
  if (PrecioArena>PrecioCal && PrecioArena > PrecioCemento) 
  {
    console.log("El Tipo mas caro es: Arena");
  }
  else
  {
    if (PrecioCal>PrecioArena && PrecioCal > PrecioCemento) 
    {
      console.log("El Tipo mas caro es: Cal");
    }
    else
    {
      console.log("El Tipo mas caro es: Cemento");

    }
  }

  console.log("El importe total a pagar bruto es: "+ Acumulador);
}
