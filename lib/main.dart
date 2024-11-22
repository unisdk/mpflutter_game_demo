import 'package:flutter/material.dart';
import 'package:mpflutter_core/mpflutter_core.dart';

void main() {
  runMPApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Hello MPFlutter'),
        ),
        body: const Center(
          child: Text('Hello MPFlutter'),
        ),
      ),
    );
  }
}
