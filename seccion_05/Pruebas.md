# Introducción a las pruebas unitarias y de integración

## ¿Qué son? & ¿Para qué sirven?

Unitarias: Enfocadas en pequeñas funcionalidades (se analizan componentes basicos necesarios).

Integración: Enfocadas en cómo reaccionan varias piezas en conjunto (se analizan el congunto de los componentes basicos).

## Características

  1. Fáciles de escribir
  2. Fáciles de leer
  3. Confiables
  4. Rápidas
  5. Principalmente unitarias

## Mitos

- Hacen que mi aplicación no tenga errores
- Las pruebas no pueden fallar
- Hacen más lenta mi aplicación
- Es una perdida de tiempo
- Hay que probar todo

## Lineamientos

1. AAA
   1. Arrege (Areglar)
      Preparamos el estado inicial
        - Inicializamos variables
        - Importaciones necesarias
   2. Act (Actuar)
      Aplicamos acciones o estímulos
        - Llamar métodos
        - Simular click
        - Realizar acciones sobre el paso anterior
   3. Asset (Afirmar)
        Observar el comportamiento resultante
        - Son los resultados esperados